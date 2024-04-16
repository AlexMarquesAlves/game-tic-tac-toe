export const tic_tac_toe = {
  board: ["", "", "", "", "", "", "", "", ""],
  symbols: ["O", "X"],
  containerElement: null,

  init: function (container) {
    this.containerElement = container;
  },

  draw: function () {
    let content = "";

    for (i in this.board) {
      content += "<div>" + i + "</div>";
    }

    this.containerElement.innerHTML = content;
  },
};
