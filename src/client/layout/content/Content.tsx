import React from "react";
import "./Content.scss";

type T_Article = { children: React.ReactNode; heading: string; description?: string };

function Content(props: { children: React.ReactNode }) {
  return <div id="main-content">{props.children}</div>;
}

function Article(props: T_Article) {
  return (
    <div className="content-docs-article">
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
      <div id="article-inner">{props.children}</div>
    </div>
  );
}

Article.defaultProps = { description: undefined };

type T_Docs = { children: React.ReactNode; title: string };

function Docs(props: T_Docs) {
  return (
    <div id="content-docs">
      <div id="docs-inner">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}

function Aside(props: { children: React.ReactNode }) {
  return <div id="content-aside">{props.children}</div>;
}
Docs.Article = Article;
Content.Docs = Docs;
Content.Aside = Aside;

export default Content;
