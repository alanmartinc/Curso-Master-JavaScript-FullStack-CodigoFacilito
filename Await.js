(async function() {
  let promesa = await new Promise((resolve,reject)=>{
    setTimeout(resolve,400,5)
  });

  let suma = await new Promise((resolve,reject)=>{
    setTimeout(resolve,400,10)
  });

  console.log(promesa + suma);
}) ();

async function showGitHubInfo() {
  let response = await fetch('https://api.github.com/users/urielhdz/repos');
  let repos = await response.json();
  console.log(repos);
}

showGitHubInfo();
