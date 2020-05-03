// You can download the app from here
// http://appium.s3.amazonaws.com/ApiDemos-debug-2015-03-19.apk
// Thanks to Jonathan Lipps for this Article
// https://appiumpro.com/editions/29
// Get coordinates from this link
// https://www.mobilefish.com/services/record_mouse_coordinates/record_mouse_coordinates.php

describe('Touch actions', () => {
    it('should be able to draw the Sauce Bolt', () => {
        // For demo purpose
        browser.pause(3000);

        browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    // x-100, y+200

                    // First part of the bolt
                    // straight lines
                    {type: 'pointerMove', duration: 100, x: 570, y: 347},
                    {type: 'pointerDown', button: 0},
                    {type: 'pause', duration: 10},
                    {type: 'pointerMove', duration: 100, x: 194, y: 724},
                    {type: 'pointerMove', duration: 100, x: 525, y: 724},
                    {type: 'pointerMove', duration: 100, x: 284, y: 975},
                    {type: 'pointerMove', duration: 100, x: 380, y: 785},
                    {type: 'pointerMove', duration: 100, x: 134, y: 785},

                    {type: 'pause', duration: 1000},

                    // First round part
                    {type: 'pointerMove', duration: 10, x: 129, y: 762},
                    {type: 'pointerMove', duration: 10, x: 124, y: 735},
                    {type: 'pointerMove', duration: 10, x: 124, y: 707},
                    {type: 'pointerMove', duration: 10, x: 125, y: 674},
                    {type: 'pointerMove', duration: 10, x: 132, y: 644},
                    {type: 'pointerMove', duration: 10, x: 143, y: 615},
                    {type: 'pointerMove', duration: 10, x: 151, y: 590},
                    {type: 'pointerMove', duration: 10, x: 161, y: 564},
                    {type: 'pointerMove', duration: 10, x: 174, y: 544},
                    {type: 'pointerMove', duration: 10, x: 189, y: 524},
                    {type: 'pointerMove', duration: 10, x: 207, y: 504},
                    {type: 'pointerMove', duration: 10, x: 224, y: 488},
                    {type: 'pointerMove', duration: 10, x: 247, y: 470},
                    {type: 'pointerMove', duration: 10, x: 264, y: 458},
                    {type: 'pointerMove', duration: 10, x: 290, y: 444},
                    {type: 'pointerMove', duration: 10, x: 319, y: 436},
                    {type: 'pointerMove', duration: 10, x: 338, y: 429},
                    {type: 'pointerMove', duration: 10, x: 364, y: 422},
                    {type: 'pointerMove', duration: 10, x: 390, y: 419},
                    {type: 'pointerMove', duration: 10, x: 416, y: 419},
                    {type: 'pointerMove', duration: 100, x: 450, y: 389},

                    // Second left inner round part
                    {type: 'pointerMove', duration: 10, x: 425, y: 387},
                    {type: 'pointerMove', duration: 10, x: 402, y: 387},
                    {type: 'pointerMove', duration: 10, x: 374, y: 391},
                    {type: 'pointerMove', duration: 10, x: 345, y: 392},
                    {type: 'pointerMove', duration: 10, x: 315, y: 402},
                    {type: 'pointerMove', duration: 10, x: 284, y: 413},
                    {type: 'pointerMove', duration: 10, x: 251, y: 428},
                    {type: 'pointerMove', duration: 10, x: 224, y: 443},
                    {type: 'pointerMove', duration: 10, x: 199, y: 462},
                    {type: 'pointerMove', duration: 10, x: 177, y: 479},
                    {type: 'pointerMove', duration: 10, x: 162, y: 496},
                    {type: 'pointerMove', duration: 10, x: 144, y: 521},
                    {type: 'pointerMove', duration: 10, x: 129, y: 544},
                    {type: 'pointerMove', duration: 10, x: 116, y: 569},
                    {type: 'pointerMove', duration: 10, x: 104, y: 602},
                    {type: 'pointerMove', duration: 10, x: 94, y: 626},
                    {type: 'pointerMove', duration: 10, x: 89, y: 653},
                    {type: 'pointerMove', duration: 10, x: 86, y: 690},
                    {type: 'pointerMove', duration: 10, x: 86, y: 732},
                    {type: 'pointerMove', duration: 10, x: 89, y: 757},
                    {type: 'pointerMove', duration: 10, x: 95, y: 788},
                    {type: 'pointerMove', duration: 100, x: 109, y: 822},

                    // Outer round part
                    // Straight lines
                    {type: 'pointerMove', duration: 100, x: 315, y: 822},
                    {type: 'pointerMove', duration: 100, x: 202, y: 1042},
                    // Round starts
                    {type: 'pointerMove', duration: 10, x: 176, y: 1030},
                    {type: 'pointerMove', duration: 10, x: 161, y: 1015},
                    {type: 'pointerMove', duration: 10, x: 143, y: 998},
                    {type: 'pointerMove', duration: 10, x: 119, y: 978},
                    {type: 'pointerMove', duration: 10, x: 102, y: 959},
                    {type: 'pointerMove', duration: 10, x: 84, y: 938},
                    {type: 'pointerMove', duration: 10, x: 72, y: 915},
                    {type: 'pointerMove', duration: 10, x: 61, y: 897},
                    {type: 'pointerMove', duration: 10, x: 44, y: 872},
                    {type: 'pointerMove', duration: 10, x: 36, y: 840},
                    {type: 'pointerMove', duration: 10, x: 27, y: 820},
                    {type: 'pointerMove', duration: 10, x: 19, y: 785},
                    {type: 'pointerMove', duration: 10, x: 16, y: 764},
                    {type: 'pointerMove', duration: 10, x: 11, y: 737},
                    {type: 'pointerMove', duration: 10, x: 8, y: 710},
                    {type: 'pointerMove', duration: 10, x: 8, y: 682},
                    {type: 'pointerMove', duration: 10, x: 11, y: 652},
                    {type: 'pointerMove', duration: 10, x: 17, y: 620},
                    {type: 'pointerMove', duration: 10, x: 26, y: 592},
                    {type: 'pointerMove', duration: 10, x: 31, y: 569},
                    {type: 'pointerMove', duration: 10, x: 39, y: 549},
                    {type: 'pointerMove', duration: 10, x: 49, y: 522},
                    {type: 'pointerMove', duration: 10, x: 62, y: 500},
                    {type: 'pointerMove', duration: 10, x: 76, y: 481},
                    {type: 'pointerMove', duration: 10, x: 92, y: 461},
                    {type: 'pointerMove', duration: 10, x: 107, y: 439},
                    {type: 'pointerMove', duration: 10, x: 128, y: 419},
                    {type: 'pointerMove', duration: 10, x: 151, y: 398},
                    {type: 'pointerMove', duration: 10, x: 173, y: 379},
                    {type: 'pointerMove', duration: 10, x: 197, y: 362},
                    {type: 'pointerMove', duration: 10, x: 222, y: 347},
                    {type: 'pointerMove', duration: 10, x: 247, y: 336},
                    {type: 'pointerMove', duration: 10, x: 272, y: 326},
                    {type: 'pointerMove', duration: 10, x: 299, y: 316},
                    {type: 'pointerMove', duration: 10, x: 329, y: 309},
                    {type: 'pointerMove', duration: 10, x: 359, y: 309},
                    {type: 'pointerMove', duration: 10, x: 389, y: 304},
                    {type: 'pointerMove', duration: 10, x: 410, y: 301},
                    {type: 'pointerMove', duration: 10, x: 439, y: 302},
                    {type: 'pointerMove', duration: 10, x: 469, y: 306},
                    {type: 'pointerMove', duration: 10, x: 494, y: 311},
                    {type: 'pointerMove', duration: 10, x: 520, y: 319},
                    {type: 'pointerMove', duration: 10, x: 548, y: 329},
                    {type: 'pointerMove', duration: 100, x: 570, y: 347},

                    {type: 'pointerUp', button: 0}
                ]
            }
        ]);

        browser.performActions([
            {
                type: 'pointer',
                id: 'finger2',
                parameters: {pointerType: 'touch'},
                actions: [
                    // x-100, y+200

                    // Second part of the bolt
                    // straight lines
                    {type: 'pointerMove', duration: 100, x: 675, y: 632},
                    {type: 'pointerDown', button: 0},
                    {type: 'pause', duration: 10},
                    {type: 'pointerMove', duration: 100, x: 432, y: 632},
                    {type: 'pointerMove', duration: 100, x: 530, y: 444},
                    {type: 'pointerMove', duration: 100, x: 281, y: 689},
                    {type: 'pointerMove', duration: 100, x: 618, y: 689},
                    {type: 'pointerMove', duration: 100, x: 245, y: 1065},

                    // Outer bold part
                    {type: 'pointerMove', duration: 10, x: 262, y: 1078},
                    {type: 'pointerMove', duration: 10, x: 282, y: 1085},
                    {type: 'pointerMove', duration: 10, x: 299, y: 1091},
                    {type: 'pointerMove', duration: 10, x: 319, y: 1097},
                    {type: 'pointerMove', duration: 10, x: 337, y: 1103},
                    {type: 'pointerMove', duration: 10, x: 364, y: 1106},
                    {type: 'pointerMove', duration: 10, x: 386, y: 1108},
                    {type: 'pointerMove', duration: 10, x: 416, y: 1108},
                    {type: 'pointerMove', duration: 10, x: 439, y: 1108},
                    {type: 'pointerMove', duration: 10, x: 462, y: 1108},
                    {type: 'pointerMove', duration: 10, x: 482, y: 1103},
                    {type: 'pointerMove', duration: 10, x: 505, y: 1098},
                    {type: 'pointerMove', duration: 10, x: 525, y: 1091},
                    {type: 'pointerMove', duration: 10, x: 548, y: 1085},
                    {type: 'pointerMove', duration: 10, x: 573, y: 1075},
                    {type: 'pointerMove', duration: 10, x: 595, y: 1065},
                    {type: 'pointerMove', duration: 10, x: 610, y: 1055},
                    {type: 'pointerMove', duration: 10, x: 632, y: 1040},
                    {type: 'pointerMove', duration: 10, x: 650, y: 1028},
                    {type: 'pointerMove', duration: 10, x: 670, y: 1013},
                    {type: 'pointerMove', duration: 10, x: 686, y: 997},
                    {type: 'pointerMove', duration: 10, x: 704, y: 982},
                    {type: 'pointerMove', duration: 10, x: 716, y: 965},
                    {type: 'pointerMove', duration: 10, x: 730, y: 948},
                    {type: 'pointerMove', duration: 10, x: 742, y: 930},
                    {type: 'pointerMove', duration: 10, x: 752, y: 912},
                    {type: 'pointerMove', duration: 10, x: 765, y: 897},
                    {type: 'pointerMove', duration: 10, x: 772, y: 877},
                    {type: 'pointerMove', duration: 10, x: 782, y: 858},
                    {type: 'pointerMove', duration: 10, x: 787, y: 839},
                    {type: 'pointerMove', duration: 10, x: 795, y: 817},
                    {type: 'pointerMove', duration: 10, x: 803, y: 795},
                    {type: 'pointerMove', duration: 10, x: 805, y: 772},
                    {type: 'pointerMove', duration: 10, x: 808, y: 747},
                    {type: 'pointerMove', duration: 10, x: 808, y: 724},
                    {type: 'pointerMove', duration: 10, x: 810, y: 701},
                    {type: 'pointerMove', duration: 10, x: 808, y: 682},
                    {type: 'pointerMove', duration: 10, x: 808, y: 659},
                    {type: 'pointerMove', duration: 10, x: 803, y: 641},
                    {type: 'pointerMove', duration: 10, x: 803, y: 615},
                    {type: 'pointerMove', duration: 10, x: 793, y: 596},
                    {type: 'pointerMove', duration: 10, x: 785, y: 572},
                    {type: 'pointerMove', duration: 10, x: 778, y: 549},
                    {type: 'pointerMove', duration: 10, x: 772, y: 529},
                    {type: 'pointerMove', duration: 10, x: 761, y: 509},
                    {type: 'pointerMove', duration: 10, x: 750, y: 494},
                    {type: 'pointerMove', duration: 10, x: 738, y: 479},
                    {type: 'pointerMove', duration: 10, x: 730, y: 461},
                    {type: 'pointerMove', duration: 10, x: 719, y: 446},
                    {type: 'pointerMove', duration: 10, x: 705, y: 431},
                    {type: 'pointerMove', duration: 10, x: 693, y: 419},
                    {type: 'pointerMove', duration: 10, x: 680, y: 407},
                    {type: 'pointerMove', duration: 10, x: 670, y: 398},
                    {type: 'pointerMove', duration: 10, x: 655, y: 387},
                    {type: 'pointerMove', duration: 10, x: 645, y: 376},
                    {type: 'pointerMove', duration: 10, x: 630, y: 369},
                    {type: 'pointerMove', duration: 10, x: 620, y: 362},

                    // Two straight lines
                    {type: 'pointerMove', duration: 100, x: 497, y: 592},
                    {type: 'pointerMove', duration: 100, x: 707, y: 592},

                    // First inner bold part
                    {type: 'pointerMove', duration: 10, x: 712, y: 612},
                    {type: 'pointerMove', duration: 10, x: 716, y: 630},
                    {type: 'pointerMove', duration: 10, x: 722, y: 647},
                    {type: 'pointerMove', duration: 10, x: 722, y: 667},
                    {type: 'pointerMove', duration: 10, x: 723, y: 683},
                    {type: 'pointerMove', duration: 10, x: 723, y: 701},
                    {type: 'pointerMove', duration: 10, x: 723, y: 724},
                    {type: 'pointerMove', duration: 10, x: 725, y: 739},
                    {type: 'pointerMove', duration: 10, x: 722, y: 754},
                    {type: 'pointerMove', duration: 10, x: 720, y: 772},
                    {type: 'pointerMove', duration: 10, x: 715, y: 792},
                    {type: 'pointerMove', duration: 10, x: 710, y: 807},
                    {type: 'pointerMove', duration: 10, x: 701, y: 824},
                    {type: 'pointerMove', duration: 10, x: 697, y: 840},
                    {type: 'pointerMove', duration: 10, x: 686, y: 855},
                    {type: 'pointerMove', duration: 10, x: 678, y: 872},
                    {type: 'pointerMove', duration: 10, x: 667, y: 885},
                    {type: 'pointerMove', duration: 10, x: 656, y: 900},
                    {type: 'pointerMove', duration: 10, x: 647, y: 912},
                    {type: 'pointerMove', duration: 10, x: 635, y: 923},
                    {type: 'pointerMove', duration: 10, x: 623, y: 937},
                    {type: 'pointerMove', duration: 10, x: 610, y: 947},
                    {type: 'pointerMove', duration: 10, x: 595, y: 959},
                    {type: 'pointerMove', duration: 10, x: 584, y: 967},
                    {type: 'pointerMove', duration: 10, x: 570, y: 975},
                    {type: 'pointerMove', duration: 10, x: 555, y: 983},
                    {type: 'pointerMove', duration: 10, x: 545, y: 989},
                    {type: 'pointerMove', duration: 10, x: 535, y: 997},
                    {type: 'pointerMove', duration: 10, x: 517, y: 1001},
                    {type: 'pointerMove', duration: 10, x: 505, y: 1008},
                    {type: 'pointerMove', duration: 10, x: 490, y: 1012},
                    {type: 'pointerMove', duration: 10, x: 472, y: 1015},
                    {type: 'pointerMove', duration: 10, x: 457, y: 1020},
                    {type: 'pointerMove', duration: 10, x: 440, y: 1020},
                    {type: 'pointerMove', duration: 10, x: 420, y: 1023},
                    {type: 'pointerMove', duration: 10, x: 398, y: 1023},
                    {type: 'pointerMove', duration: 10, x: 387, y: 1023},
                    {type: 'pointerMove', duration: 10, x: 371, y: 1023},
                    {type: 'pointerMove', duration: 10, x: 367, y: 1023},

                    // second inner bold part
                    // First straight line
                    {type: 'pointerMove', duration: 100, x: 392, y: 990},
                    {type: 'pointerMove', duration: 10, x: 419, y: 986},
                    {type: 'pointerMove', duration: 10, x: 443, y: 986},
                    {type: 'pointerMove', duration: 10, x: 461, y: 983},
                    {type: 'pointerMove', duration: 10, x: 488, y: 978},
                    {type: 'pointerMove', duration: 10, x: 512, y: 968},
                    {type: 'pointerMove', duration: 10, x: 535, y: 959},
                    {type: 'pointerMove', duration: 10, x: 558, y: 948},
                    {type: 'pointerMove', duration: 10, x: 578, y: 933},
                    {type: 'pointerMove', duration: 10, x: 595, y: 920},
                    {type: 'pointerMove', duration: 10, x: 612, y: 905},
                    {type: 'pointerMove', duration: 10, x: 623, y: 893},
                    {type: 'pointerMove', duration: 10, x: 635, y: 877},
                    {type: 'pointerMove', duration: 10, x: 650, y: 860},
                    {type: 'pointerMove', duration: 10, x: 660, y: 839},
                    {type: 'pointerMove', duration: 10, x: 670, y: 822},
                    {type: 'pointerMove', duration: 10, x: 680, y: 800},
                    {type: 'pointerMove', duration: 10, x: 685, y: 779},
                    {type: 'pointerMove', duration: 10, x: 689, y: 761},
                    {type: 'pointerMove', duration: 10, x: 690, y: 739},
                    {type: 'pointerMove', duration: 10, x: 692, y: 720},
                    {type: 'pointerMove', duration: 10, x: 692, y: 698},
                    {type: 'pointerMove', duration: 10, x: 692, y: 682},
                    {type: 'pointerMove', duration: 10, x: 692, y: 662},
                    {type: 'pointerMove', duration: 10, x: 690, y: 644},
                    {type: 'pointerMove', duration: 100, x: 675, y: 632},

                    {type: 'pointerUp', button: 0}
                ]
            }
        ]);

        // For demo purpose
        browser.pause(5000);
    });
});
