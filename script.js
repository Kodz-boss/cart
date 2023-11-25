var input = document.querySelector("input");
        var button = document.querySelector("button");
        var holder = document.querySelector(".boxholder");

        button.addEventListener("click", () => {
            if (input.value.trim() === "") {
                alert("Invalid item");
            } else {
                var newitem = document.createElement("div");
                newitem.className = "box";
                newitem.innerHTML = `<p>${input.value} <i class="fa-sharp fa-solid fa-xmark"></i></p>`;
                holder.appendChild(newitem);
                input.value = "";

                var cancel = newitem.querySelector(".fa-xmark");
                cancel.addEventListener("click", () => {
                    holder.removeChild(newitem);
                });
            }
        });