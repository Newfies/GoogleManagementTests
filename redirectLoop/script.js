document.addEventListener("DOMContentLoaded", (event) => {
    const SITEURL = "https://gmt.gvnx.xyz/redirectLoop/"; // Replace with your site URL
    const RNG = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    window.location.href = `${SITEURL}/${RNG}`; // Redirect to SITEURL/RNG
});
