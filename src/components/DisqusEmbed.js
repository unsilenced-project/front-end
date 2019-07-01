import React from "react";
import Disqus from "disqus-react";
import "./DisqusEmbed.scss";

const DisqusEmbed = ({ disqusShortname, disqusConfig }) => {
  return (
    <div className="comments-wrapper">
      <h1>{disqusConfig.title}</h1>
      <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </Disqus.CommentCount>

      {/* <Disqus.CommentEmbed
        commentId={props.featuredComment}
        showMedia={true}
        height={160}
      /> */}

      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
};

export default DisqusEmbed;
