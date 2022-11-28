import SlangGenerator from "./utils/GenerateSlang";

document.getElementById("add").onclick = async () => {
  document.getElementById("main").innerHTML = `
<div class="p-4 mt-3 bg-zinc-900 rounded-xl" style="box-shadow:0px 0px 40px #111">
<p class="font-bold text-2xl text-gray-100">Generated Word</p>

<p class="text-4xl mt-5 font-extrabold text-yellow-400" >${await SlangGenerator(
    document.getElementById("input").value.length == 0 ? alert("you gotta put a prompt") : document.getElementById("input").value
  )}</p>
</div>
`;
};
