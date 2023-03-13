import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePagination, Pagination } from "pagination-react-js"


export default function PostList({ posts }) {
  const { currentPage, entriesPerPage, entries } = usePagination(1, 10)
  const [postdata, setPostData] = useState([]);

  useEffect(() => {
    setPostData([...posts])
  }, [])
  return (
    <>
      <div className="container">
        <table className="table mt-5">
          <tbody>
            {
              postdata.slice(entries.indexOfFirst, entries.indexOfLast).map(post => {
                return (
                  <tr key={post.id}>
                    <td>
                      <Link href={`posts/${post.id}`} passHref style={{ textDecoration: 'none', color: '#000' }}>
                        <h2>
                          {post.id}. {`${post.title}`.toUpperCase()}
                        </h2>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <Pagination
          entriesPerPage={entriesPerPage.get}
          totalEntries={postdata.length}
          currentPage={{ get: currentPage.get, set: currentPage.set }}
          offset={3}
          classNames={{
            wrapper: "pagination m-auto",
            item: "pagination-item",
            itemActive: "pagination-item-active",
            navPrev: "pagination-item nav-item",
            navNext: "pagination-item nav-item",
            navStart: "pagination-item nav-item",
            navEnd: "pagination-item nav-item",
            navPrevCustom: "pagination-item",
            navNextCustom: "pagination-item"
          }}
          showFirstNumberAlways={true}
          showLastNumberAlways={true}
          navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
          navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
          navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
          navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
          navPrevCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */ }}
          navNextCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */ }}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
