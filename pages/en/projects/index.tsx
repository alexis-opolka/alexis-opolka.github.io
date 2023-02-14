import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import anim from 'styles/animations.module.css'
import Footer from '../../footer'
import GITHUB_TOKEN from '../../api/secrets'

function requestGraphQL(request: string) {
  var graphQlRequest = new Request('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      query: request
    })
  })
  var myRepositories = null;
  fetch(graphQlRequest)
  .then(response => response.json()).then(data => {
    myRepositories = data.data.search;
    console.log(data.data, myRepositories);
    for (let i = 0; i < myRepositories.edges.length; i++) {
      const repo = myRepositories.edges[i].node;
      console.log(`Repository n°${i}: Name: ${repo.name}, Description: "${repo.description}", URL: "${repo.url}", Languages: ${repo.languages.nodes.map((language) => language.name)}`);

      const repoHolder = document.getElementById("repoHolder");
      var repoCard = document.createElement("div");
      repoCard.className = styles.card;

      var repoStack = document.createElement("div");
      repoStack.className = styles.cardContent;
      repoCard.appendChild(repoStack);

      var repoHeader = document.createElement("div");
      repoHeader.className = styles.cardHeader;
      repoStack.appendChild(repoHeader);

      var repoName = document.createElement("h2");
      repoName.innerHTML = repo.name;
      repoHeader.appendChild(repoName);

      var repoBody = document.createElement("div");
      repoBody.className = styles.cardBody;
      repoStack.appendChild(repoBody);

      var repoDescription = document.createElement("p");
      if (repo.description != null) {
        repoDescription.innerHTML = repo.description.substring(0, 100) + "...";
      } else {
        repoDescription.innerHTML = "No description";
      }
      repoBody.appendChild(repoDescription);


      var repoFooter = document.createElement("div");
      repoFooter.className = styles.cardFooter;
      var repoURLHolder = document.createElement("p");

      var repoURL = document.createElement("a");
      repoURL.textContent = "Go to the repository";
      repoURL.href = repo.url;
      repoURL.target = "_blank";

      repoURLHolder.appendChild(repoURL);
      repoFooter.appendChild(repoURLHolder);
      repoStack.appendChild(repoFooter);

      if (repoHolder != null) {
        repoHolder.appendChild(repoCard);
      }
    }
  })
  return myRepositories;
}

console.log(
  requestGraphQL(`
  {
    search(query: "user:alexis-opolka", type: REPOSITORY, first: 50) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            name
            description
            diskUsage
            isFork
            isPrivate
            isArchived
            url
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }`))

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexis Opolka&apos;s website</title>
        <meta name="description" content="Welcome on Alexis Opolka's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GitHub&apos;s projects
        </h1>

        <div id='repoHolder' className={styles.grid}>
        </div>
      </main>

      <Footer />
    </div>
  )
}
