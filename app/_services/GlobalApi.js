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

export default{getCategory}

