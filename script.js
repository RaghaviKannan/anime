const getscene = async () => {
    var url = document.getElementById("url").value;
    try {
        await fetch(
            `https://api.trace.moe/search?url=${url}`
        ).then((e) => e.json()).then((d) => {
            for (let i = 0; i < d.result.length; i++) {
                var card = document.createElement("div");
                card.style.border="dotted 2px"
                var filename = document.createElement("h5");
                filename.innerHTML = `Filename = ${d.result[i].filename}`;
                var episode = document.createElement("h6");
                episode.innerHTML = `Episode = ${d.result[i].episode}`;
                var time = document.createElement("h6");
                time.innerHTML = `From: ${d.result[i].from} To: ${d.result[i].to}`;
                var video = document.createElement("video");
                video.src = d.result[i].video
                video.controls = true;
                video.muted = false;
                video.height = 240;
                video.width = 320;
                card.append(filename, episode, time, video)
                document.body.append(card)
    
            }
        });
    } catch (error) {
        var error = document.createElement("div");
        error.innerHTML="Image could not be identified"
        document.body.append(error)
    }

}