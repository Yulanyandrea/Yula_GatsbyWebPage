# Yula_GatsbyWebPage

This is my personal web site created in Gatsby. Here you will find my process as a software developer and sound enginner.
In the future I'm planning to create projects focus on music ideas as hobi and my continues learning with more focus ideas or currently problems that need to be solve
with develop ideas in some technologies

![yula web site](https://user-images.githubusercontent.com/79812118/232327942-7f13eef9-061c-413d-a0d4-5f234ac52596.jpg)

On the other hand, this project is connected to Netlify using forms technology that's why when you send a message, you will see the following customized in Netlify

![Captura de pantalla 2023-04-24 180141](https://user-images.githubusercontent.com/79812118/234134184-17cdba2c-11e2-4f74-923d-d5b8f83c2184.jpg)

Useful links: (https://t-helaysa.com/blog/cannot-connect-mongodb-atlas-inside-gatsby/)

If you want to call the MongoDB using GraphQL please use the following query:

```bash
query MyQuery{
allMongodbProjectsWork{
  edges {
    node {
      id
      name
        }
      }
  }
}
```

query MyQuery{
allMongodbProjectsWork{
edges {
node {
id
name
}
}
}
}
