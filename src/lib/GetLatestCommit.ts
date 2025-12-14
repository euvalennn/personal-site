import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_API_KEY,
});

export async function getLatestCommit() {
  const res = await octokit.request(
    "GET /repos/euvalennn/personal-site/commits?sha=preview&per_page=1",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const commitDate = new Date(res.data[0].commit.author.date);

  return {
    hash: res.data[0].sha.slice(0, 7),
    html_url: res.data[0].html_url,
    date: commitDate.toLocaleDateString("en-US"),
  };
}
