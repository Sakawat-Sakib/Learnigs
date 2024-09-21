console.log("start");

function logIn(email,pass)
{
	return new Promise((resolve,reject)=>
	{

		setTimeout(()=>
		{
			console.log("now we have data");
			resolve({ userEmail:email });
		},3000);
	});
}



function getVideo(email)
{
	return new Promise((resolve,reject)=>
	{

		setTimeout(()=>
		{
			resolve(["vd1","vd2","vd3"]);
		},2000);
	});
}


function videoDetails(video)
{
	return new Promise((resolve,reject)=>
	{

		setTimeout(()=>
		{	
			resolve("title of the video");
		},1000);
	});
}

/*logIn("yahoo",12345)
.then(para=>getVideo(para.userEmail))
.then(videos=>videoDetails(videos[0]))
.then(details=>console.log(details));*/

async function display()
{
	try
	{
		const logged=await logIn("gamil",67676);
		const video=await getVideo(logged.userEmail);
		const details =await videoDetails(video[0]);
		console.log(details);
	}
	catch(err)
	{
		console.log("404 error");
	}
}

display();		

console.log("end");