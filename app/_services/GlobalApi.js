import { gql, request } from 'graphql-request'
 
const Master_URL = process.env.NEXT_PUBLIC_MASTER_URL_KEY;


const getCategory = async()=>{
   
    const query=gql`
    query Category {
        categories {
            bgcolor {
            hex
            }
            id
            name
            icon {
            url
            }
        }
    }`

    const result=await request(Master_URL, query)
    return result

   
}

const getAllBusinessList = async()=>{
    const query = gql
    `
    query MyQuery {
        businessLists {
            about
            address
            category {
            name
            }
            contactPerson
            email
            images {
            url
            }
            id
            name
        }
        }
    `
    const result=await request(Master_URL, query)
    return result
}


const getBusinessByCategory = async(category)=>{
    const query = gql `query MyQuery {
  businessLists(where: {category: {name: "`+category+`"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    images {
      url
    }
    name
  }
}`
const result=await request(Master_URL, query)
    return result
}


const getBusinessById = async(id)=>{
  const query = gql `
    query GetBusinessById{
  businessList(where: {id: "`+id+`"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`
const result=await request(Master_URL, query)
  return result


}



export default{
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById
}

