export function rand_unsure_list() {
    const unsurelist = [
        [4, ["大概……也许……可能？"]],
        [3, ["我想想……"]],
        [4, ["可能吧（"]],
        [1, ["其实我也不知道（逃"]],
        [1, ["啥，我刚刚说了什么吗？（无辜脸"]],
        [4, ["没准呢"]],
        [3, ["也许呢"]],
        [2, ["pwq"]],
        [1, ["琳……琳脑过载"]],
        [2, ["这样的问题不要问琳酱啊w，琳酱不知道qaq"]],
        [1, ["什么？你这都不会？"], ["但是我也不会233", 2000]],
    ].map(msg => { msg[1][1] = 500; return msg; })
    return unsurelist;
}
