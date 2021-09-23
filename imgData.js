// const imgData=(arr)=>arr.map(item=>item.url);
// const imgData=(arr)=>arr.map(item=>item["url"]);
const imgData=(arr)=>arr.map((item)=>`<img src ="${item.url}" alt="${item.title}"/>`);
console.log(
    imgData([
    {url:"pickupbiz.com", title:"PickupBiz"},
    {url:"google.com", title:"Google"},
    {url:"gmail.com", title:"Gmail"},
    ])
);
