import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "./Hero";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import axios from "axios";
import Sider from "./Sider";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;



  console.log(cat);

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    })
  );



  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <section className="overflow-hidden pt-4">
      <div className="container">
        <Hero posts={posts} getText={getText}/>
        <div className="row">
          <div className="col-md-9">
            {posts.map((post) => (
              <div key={post.id} className="card mb-4">
                <Link
                  className="text-muted text-decoration-none"
                  to={`/post/${post.id}`}
                >
                  <h1>{post.title}</h1>
                  {post.img && (
                    <img
                      className="img-fluid"
                      src={`../upload/${post.img}`}
                      alt=""
                    />
                  )}
                </Link>
                <p>{getText(post.desc).substring(0, 200)}</p>
        
                {/* <button className="btn btn-sm">
                  <Link to={`/post/${post.id}`}>
                    Read More
                  </Link>
                </button> */}
              </div>
            ))}
          </div>
          <div className="col-md-3 ms-auto">
            <Sider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
