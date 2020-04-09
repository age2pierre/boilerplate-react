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

From [src/components/DemoGql.tsx:30:16](../src/components/DemoGql.tsx#L30-L41)

---

Extracted by [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin)
