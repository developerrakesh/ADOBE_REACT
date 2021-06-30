import {isLoggedIn, getAccessToken} from './auth';
const endpoint = 'http://localhost:9000/graphql';

export async function graphQLRequest(query, variables) {
  const request =  {
       method: "POST",
       headers: {'content-type': 'application/json'},
      body : JSON.stringify({query, variables}) 
  };
   if(isLoggedIn()) {
    request.headers['authorization'] = 'Bearer ' + getAccessToken()
  }
  const response = await fetch(endpoint, request);
  const responseBody = await response.json();
  if(responseBody.errors) {
    console.log("error!!!");
  }
 return responseBody.data;
}

export async function loadJobs() {
    const query =  `{
                jobs {
                  id
                  title
                  company {
                    id
                    name
                  }
                }
              }`
    const {jobs} = await graphQLRequest(query);
    return jobs;
}

export async function loadJob(id) {
    const query =  `query JobQuery($id:ID!) {
        job(id:$id) {
          id
          title
          description
          company {
            id
            name
          }
        }
      }`;
const {job} = await graphQLRequest(query, {id});
return job;
}

export async function createJob(input) {
    const query = `
    mutation  CreateJobMutation($input:CreateJobInput){
        createJob(input: $input) 
      }`;

    const data = await graphQLRequest(query, {input});
    return data.createJob;
}