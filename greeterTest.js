var Student = (function() {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());

function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
var Greeter = (function() {
    function Greeter() {}
    Greeter.prototype.greet = function() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());


////////////
function Levenshtein_Distance(s, t) {
    var n = s.length; // length of s

    　
    var m = t.length; // length of t

    　
    var d = []; // matrix

    　
    var i; // iterates through s

    　
    var j; // iterates through t

    　
    var s_i; // ith character of s

    　
    var t_j; // jth character of t

    　
    var cost; // cost

    　 // Step 1

    　
    if (n == 0) return m;

    　
    if (m == 0) return n;

    　 // Step 2

    　
    for (i = 0; i <= n; i++) {

        　　
        d[i] = [];

        　　
        d[i][0] = i;

        　
    }

    　
    for (j = 0; j <= m; j++) {

        　　
        d[0][j] = j;

        　
    }

    　 // Step 3

    　
    for (i = 1; i <= n; i++) {

        　　
        s_i = s.charAt(i - 1);

        　　 // Step 4

        　　
        for (j = 1; j <= m; j++) {

            　　　
            t_j = t.charAt(j - 1);

            　　　 // Step 5

            　　　
            if (s_i == t_j) {

                　　　　
                cost = 0;

                　　　
            } else {

                　　　　
                cost = 1;

                　　　
            }

            　　　 // Step 6

            　　　
            d[i][j] = Minimum(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

            　　
        }

        　
    }

    　 // Step 7

    　
    return d[n][m];

}

//求两个字符串的相似度,返回相似度百分比

function Levenshtein_Distance_Percent(s, t) {

    　
    var l = s.length > t.length ? s.length : t.length;

    　
    var d = Levenshtein_Distance(s, t);

    　
    return (1 - d / l).toFixed(4);

}

//求三个数字中的最小值

function Minimum(a, b, c) {

    　
    return a < b ? (a < c ? a : c) : (b < c ? b : c);

}

var str1 = "om",
    str2 = "xdsfsx";
console.log(Levenshtein_Distance_Percent(str1, str2));
