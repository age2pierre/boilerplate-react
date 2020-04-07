# Extracted GraphQL Operations

## Queries

### DemoGetFilms

```graphql
query DemoGetFilms {
  allFilms {
    totalCount
    films {
      id
      title
      created
    }
  }
}
```

From [src/components/DemoGql.tsx:15:16](src/components/DemoGql.tsx#L15-L26)

---

Extracted by [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin)
