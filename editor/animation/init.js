//Dont change it
requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $, rr) {
        var $tryit;
        var tCanvas;

        function XORefereeCanvas(dom, options) {
            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            options = options || {};

            var x0 = 10,
                y0 = 10;
            var cellSize = options["cell"] || 70;

            var fullSize = x0 * 2 + cellSize * 3;

            var oRadius = cellSize * 0.3;

            var attrField = {"stroke": colorGrey4, "stroke-width": cellSize / 10, "stroke-linecap": "round"};
            var attrX = {"stroke": colorBlue4, "stroke-width": cellSize / 10, "stroke-linecap": "round"};
            var attrO = {"stroke": colorOrange4, "stroke-width": cellSize / 10};
            var attrWinO = {"stroke": colorOrange3, "stroke-width": cellSize / 10, "stroke-linecap": "round"};
            var attrWinX = {"stroke": colorBlue3, "stroke-width": cellSize / 10, "stroke-linecap": "round"};


            var paper = Raphael(dom, fullSize, fullSize, 0, 0);
            var obj = this;

            var map = [
                [],
                [],
                []
            ];

            this.placeO = function (row, col) {
                if (map[row][col]) {
                    map[row][col].remove()
                }
                var fig = paper.circle(
                    x0 + cellSize * col + cellSize / 2,
                    y0 + cellSize * row + cellSize / 2,
                    oRadius
                ).attr(attrO);
                fig.mark = "O";
                map[row][col] = fig;
            };

            this.placeX = function (row, col) {
                if (map[row][col]) {
                    map[row][col].remove()
                }
                var fig = paper.path(
                    Raphael.format("M{0},{1}L{2},{3}M{0},{3}L{2},{1}",
                        x0 + cellSize * col + cellSize * 0.2,
                        y0 + cellSize * row + cellSize * 0.2,
                        x0 + cellSize * col + cellSize * 0.8,
                        y0 + cellSize * row + cellSize * 0.8
                    )).attr(attrX);
                fig.mark = "X";
                map[row][col] = fig;
            };

            this.clearCell = function (row, col) {
                if (map[row][col]) {
                    map[row][col].remove()
                }
                map[row][col] = null;
            };

            this.createCanvas = function (field, line) {

                for (var i = 1; i <= 2; i++) {
                    paper.path(
                        Raphael.format("M{0},{1}V{2}",
                            x0 + cellSize * i,
                            y0,
                            y0 + cellSize * 3
                        )
                    ).attr(attrField);
                    paper.path(
                        Raphael.format("M{0},{1}H{2}",
                            x0,
                            y0 + cellSize * i,
                            x0 + cellSize * 3
                        )
                    ).attr(attrField);
                }
                for (var row = 0; row < 3; row++) {
                    for (var col = 0; col < 3; col++) {
                        var chip = {};
                        if (field[row][col] === "O") {
                            this.placeO(row, col);
                        }
                        else if (field[row][col] === "X") {
                            this.placeX(row, col);
                        }
                    }
                }
                if (line) {
                    paper.path(
                        Raphael.format("M{0},{1}L{2},{3}",
                            x0 + line[1][1] * cellSize,
                            y0 + line[1][0] * cellSize,
                            x0 + line[2][1] * cellSize,
                            y0 + line[2][0] * cellSize
                        )).attr(line[0] ? attrWinX : attrWinO);
                }

            };

            var active;

            this.createFeedback = function () {
                active = paper.rect(x0, y0, cellSize * 3, cellSize * 3).attr({"fill": colorBlue1, "fill-opacity": 0, "stroke-width": 0});
                active.click(function (e) {
                    var col = Math.floor((e.offsetX - x0) / cellSize);
                    var row = Math.floor((e.offsetY - x0) / cellSize);
                    var chip = map[row][col] && map[row][col].mark;
                    if (chip == "X") {
                        obj.placeO(row, col);
                    }
                    else if (chip == "O") {
                        obj.clearCell(row, col);
                    }
                    else {
                        obj.placeX(row, col);
                    }
                    active.toFront();

                });
            };

            this.randomField = function () {
                var choices = ["X", "X", "O", "O", ""];
                for (var row = 0; row < 3; row++) {
                    for (var col = 0; col < 3; col++) {
                        var chip = choices[Math.floor(Math.random() * choices.length)];
                        if (chip == "X") {
                            obj.placeX(row, col);
                        }
                        else if (chip == "O") {
                            obj.placeO(row, col);
                        }
                        else {
                            obj.clearCell(row, col);
                        }
                    }
                }
            };

            this.gatherData = function () {
                var res = [];
                for (var row = 0; row < 3; row++) {
                    var temp = "";
                    for (var col = 0; col < 3; col++) {
                        temp += map[row][col] ? map[row][col].mark : "."
                    }
                    res.push(temp);
                }
                return res;
            };
        }

        var io = new extIO({
            animation: function($expl, data){
                var checkioInput = data.in[0];
                var explanation = data.ext?data.ext.explanation:undefined;
                if (!checkioInput || !explanation){
                    return;
                }
                var canvas = new XORefereeCanvas($expl[0]);
                canvas.createCanvas(checkioInput, explanation);
            }
        });
        io.start();
    }
);



