import React from "react";
import { Link } from "react-router-dom";
import FrontLayout from "../../../layouts/FrontLayout";

export default function HomePage() {
  return (
    <FrontLayout title="Fast Code" text="A Blog in React with PartCombinator">
      <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    {/* <!-- Post preview--> */}
                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">Man must explore, and this is exploration at its greatest</h2>
                            <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <Link to="/post">Start Bootstrap</Link>
                            on September 24, 2021
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr class="my-4" />
                    
                  
                    {/* <!-- Pager--> */}
                    <div class="d-flex justify-content-end mb-4"><Link class="btn btn-primary text-uppercase" to="/post">Older Posts →</Link></div>
                </div>
            </div>
        </div>
    </FrontLayout>
  )
}