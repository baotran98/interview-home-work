import { Avatar, Collapse, List, Input, Skeleton } from 'antd'
import { debounce } from 'lodash'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComment } from '../../reduxToolkit/comment.slice'
import { getPost } from '../../reduxToolkit/post.slice'
import { getUser } from '../../reduxToolkit/user.slice'

const { Panel } = Collapse
const { Search } = Input

const PostList = () => {
  const { postList } = useSelector((state) => state.post)
  const { commentList } = useSelector((state) => state.comment)
  const { userList } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(true)
  const [searchPost, setSearchPost] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost())
    dispatch(getComment())
    dispatch(getUser())
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const formatDate = new Date().toLocaleDateString('vi-VI')

  const keys = ['title']
  const handleSearch = (dataSource) => {
    return dataSource.filter((item) => keys.some((key) => item[key].toLowerCase().includes(searchPost)))
  }

  const searchDebounce = debounce((e) => {
    setSearchPost(e.target.value)
  }, 1000)

  return (
    <>
      <Search
        onChange={searchDebounce}
        className='my-5'
        placeholder='Enter title post here...'
        loading={searchPost ? true : false}
        allowClear
      />
      {loading && (
        <Fragment>
          <Skeleton
            avatar
            paragraph={{
              rows: 4
            }}
          />
          <Skeleton
            avatar
            paragraph={{
              rows: 4
            }}
          />
          <Skeleton
            avatar
            paragraph={{
              rows: 4
            }}
          />
        </Fragment>
      )}
      {!loading && (
        <List
          itemLayout='vertical'
          size='small'
          pagination={{
            pageSize: 3
          }}
          dataSource={handleSearch(postList)}
          renderItem={(item) => (
            <List.Item
              className='my-2 rounded-md shadow-md'
              key={item.id}
              actions={[
                <Collapse bordered={false}>
                  <Panel header={`Comment (${(commentList?.filter((comment) => comment.postId === item.id)).length})`}>
                    {commentList
                      ?.filter((comment) => comment.postId === item.id)
                      .map((comm) => (
                        <Fragment key={comm.id}>
                          <div className='mt-5 flex flex-col justify-end rounded-md bg-[#eee] p-3 text-start shadow-md'>
                            <h3 className='text-[16px] text-sky-600'>
                              {comm.name} <span className='text-[10px] text-gray-800'>(username)</span>
                            </h3>

                            <h5 className='text-[16px] text-green-600'>
                              {comm.email} <span className='text-[10px] text-gray-800'>(email)</span>
                            </h5>

                            <p className='p-3 text-[12px]'>
                              {comm.body} <span className='text-[10px] text-red-500'>(message)</span>
                            </p>
                          </div>
                        </Fragment>
                      ))}
                  </Panel>
                </Collapse>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={`https://joeschmoe.io/api/v1/random.${item.id}`} />}
                title={
                  <span className='bg-primary-gradient bg-clip-text p-3 text-xl font-bold italic text-transparent'>
                    {item.title}
                  </span>
                }
                description={
                  <Fragment>
                    <div className='flex flex-col gap-y-1'>
                      {userList
                        ?.filter((user) => user.id === item.userId)
                        .map((iUser) => (
                          <Fragment key={iUser.id}>
                            <h5 className='text-[10px] text-slate-500'>
                              Author: <span className='text-[14px] italic text-gray-800'> {iUser.name}</span>
                            </h5>
                          </Fragment>
                        ))}
                      <h5 className='text-[10px] text-slate-500'>
                        Date: <span className='text-[14px] italic text-gray-800'> {formatDate}</span>
                      </h5>
                      <span className='text-[12px] font-normal text-gray-600'>
                        {item.body.length > 100 ? <span>{item.body.slice(0, 100)}...</span> : <span>{item.body}</span>}
                      </span>
                    </div>
                  </Fragment>
                }
              />
              {item.content}
            </List.Item>
          )}
        />
      )}
    </>
  )
}

export default PostList
