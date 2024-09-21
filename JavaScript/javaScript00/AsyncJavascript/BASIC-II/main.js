/*
const posts=[
	
	{title:'Post One',body:'this is post one'},
	{title:'Post two',body:'this is post two'}
];

function getPost()
{
	setTimeout(()=>{

		let output='';
		posts.forEach((post,index)=>
			{
				output+=`<li>${post.title}</li>`;
				document.body.innerHTML=output;
			});

	},1000);
}




function adding(extension,callback)
{
	setTimeout(()=>
	{

		posts.push(extension);
		callback();

	},3000);
	
}

adding({title:'new title',body:'new post'},getPost);
*/

/*use of promises*/
/*------start-----*/

/*const posts=[
	
	{title:'Post One',body:'this is post one'},
	{title:'Post two',body:'this is post two'}
];

function getPost()
{
	setTimeout(()=>{

		let output='';
		posts.forEach((post,index)=>
			{
				output+=`<li>${post.title}</li>`;
				document.body.innerHTML=output;
			});

	},2000);
}




function adding(extension)
{
	return new Promise((resolve,reject)=>
	{

			setTimeout(()=>
			{
				posts.push(extension);


				const status=false;

				if(status)
				{
					resolve();
				}
				else
				{
					reject('Error:404 not found');
				}

			},1000);

	});

	
	
}

adding({title:'new title',body:'new post'})
.then(getPost)
.catch(err=>console.log(err));*/

/*-------END-------*/

//promise all

const promise1=Promise.resolve('Hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>
					  setTimeout(resolve,2000,'good bye')
				   );


Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));