function Post(title, body, author, views, comments, isLive)
{
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

let post = new Post("ahihi" , 
    "anh Hoang dzzz",
    "abc", 
    100,
    [
        {author : 'a Huan dz ', body: "lewlew"},
        {author : "a Huan dz ", body: "lew lew"}
    ],
    true );
console.log(post);