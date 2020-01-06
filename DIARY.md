# diary

Here are my first thought on this project. I descripe how I'm going to implement/build different parts of the app.

I still haven't decided what cms to use but checkout and kitchen features will be created from scratch and will use Graphql as backend(propably FaunaDB). For the actual page content I think I need some kind of CMS. Haven't figured out that yet.

## Workflow (for my personal usage)

1. Create draft with figma
2. mock in to react
3. create as good Graphql schema you can based on mock.
4. mock graphql data
5. add logic to react.
6. add final touches (animations etc)
7. write tests
8. write graphql server
9. start from the beginnning

## 27.11.

So yesterday learned some figma and created draft for the restaurant page. Didn't add any colors at this point. Still some features missing like Titles and footer but going to create a mock for this draft and iterate from there.

[Figma draft](https://www.figma.com/proto/fJvnXlFfbbn6x29xQIYKDO/Pizza-italia?node-id=5421%3A876&scaling=scale-down)

## 28.11.

Had some random problems with @zeit/next-css last night so restructured the whole project. Also stumbled upon a great starter [product-boilerplate](https://github.com/nice-boys/product-boilerplate). There is so much new stuff so I will look in to them gradually and add the needed parts to the project.

## 29.11. - 1.12.

A lot of fighting with react-spring and react-use-gesture but atleast I feel really confident using them now. As a note to myself: don't try to use react-use-gesture with absolute positioning elements. Got really erratic behavior. Negative margin seems to bee the way to go.

## 3.12.

Starting to work with graphql server.

## 4.1. - 5.1.

mock graphql server. Implement basic functions of the menu and cart. Started reading [https://basecamp.com/shapeup](https://basecamp.com/shapeup). Seems really interesting so decided to start doing my own development in similar way.
