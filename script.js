const songs = document.querySelectorAll(".song");
var counter = 0 ;
songs.forEach(song => {
	const playButton = song.querySelector(".play-btn") 
	const audio = song.querySelector(".song-audio")
	let count = 0;
	playButton.addEventListener('click' , function(){
		const icon = playButton.querySelector("i");
		icon.classList.toggle("fa-play");
		icon.classList.toggle("fa-pause");
		
		if(count == 0){
			count = 1 ;
			audio.play() ;
			counter += 1 ; 
		}
		else{
			count = 0 ;
			audio.pause() ;
			counter -= 1 ;
		}
		if(counter > 1){
			audio.pause();
			icon.classList.toggle("fa-play");
		}
	})

})
const btm1 = document.querySelector(".bottom-song");
const btm2 = document.querySelector(".bottom-singer");
const btm3 = document.querySelector(".bottom-img img");
const btm4 = document.querySelector(".fav");
const btmsec = document.querySelector(".bottom-sec");

songs.forEach(song => {
	const playButton = song.querySelector(".play-btn") 
	const Songname = song.querySelector("p") 
	const Singername = song.querySelector("h2")
	const Songimage = song.querySelector("img")
	

	playButton.addEventListener('click' , function(){
		const Songfav = song.querySelector("i")
		btm1.innerHTML = Songname.innerHTML;
		btm2.innerHTML = Singername.innerHTML;
		btm3.src = Songimage.src;
		Songfav.classList.toggle("fa-regular");
		Songfav.classList.toggle("fa-solid");
		btmsec.style.opacity = "1";
	})
})








const gaanas = document.querySelectorAll(".song2");
gaanas.forEach(gaana => {
	const playButton2 = gaana.querySelector(".playlist-button") 
	const audio2 = gaana.querySelector(".song-audio")
	let count2 = 0;
	playButton2.addEventListener('click' , function(){
		const icon = playButton2.querySelector("i");
		icon.classList.toggle("fa-play");
		icon.classList.toggle("fa-pause");
		
		if(count2 == 0){
			count2 = 1 ;
			audio2.play() ;
			counter += 1 ;
		}
		else{
			count2 = 0 ;
			audio2.pause() ;
			counter -= 1 ;
		}
		if(counter > 1){
			audio2.pause();
			icon.classList.toggle("fa-play");
		}
	})
})

// const btm1 = document.querySelector(".bottom-song");
// const btm2 = document.querySelector(".bottom-singer");
// const btm3 = document.querySelector(".bottom-img img");
// const btm4 = document.querySelector(".fav");

gaanas.forEach(song => {
	const playButton = song.querySelector(".playlist-button") 
	const Songname = song.querySelector(".song-name") 
	const Singername = song.querySelector(".name")
	const Songimage = song.querySelector("img")
	

	playButton.addEventListener('click' , function(){
		const Songfav = song.querySelector("i")
		btm1.innerHTML = Songname.innerHTML;
		btm2.innerHTML = Singername.innerHTML;
		btm3.src = Songimage.src;
		Songfav.classList.toggle("fa-regular");
		Songfav.classList.toggle("fa-solid");
		btmsec.style.opacity = "1";
	})
})









// window.addEventListener('scroll' , ()=>{
// 	let content = document.querySelectorAll('.song');
// 	content.forEach(song =>{
// 		let contentPos = song.getBoundingClientRect().top;
// 		let screenPos = window.innerHeight;
// 		if(contentPos<screenPos){
// 			song.classList.add("animate__zoomIn");
// 		}
// 		else{
// 			song.classList.remove("animate__zoomIn");
// 		}
// 	})
// })

// window.addEventListener('scroll' , ()=>{
// 	let content = document.querySelectorAll('.enlarge-img');
// 	content.forEach(song =>{
// 		let contentPos = song.getBoundingClientRect().top;
// 		let screenPos = window.innerHeight;
// 		if(contentPos<screenPos){
// 			song.classList.add("animate__zoomIn");
// 		}
// 		else{
// 			song.classList.remove("animate__zoomIn");
// 		}
// 	})
// })
	

const audios = document.querySelectorAll("audio");
const volume = document.querySelector("#myRangeVol");
audios.forEach (manit =>{
	manit.volume = volume.value/100;
	volume.addEventListener("change",()=>{
		manit.volume = volume.value/100;
	})
})

