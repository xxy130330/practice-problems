<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Title</title>
        <script>
            var input_array = [
            [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
            [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
            [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
            [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
            ];
            var average_size = 2;

            calAverageSize(input_array, average_size);

            function calAverageSize(givenArr, size) {
            var newArr = [];
            var total = 0;
            var average;
            var count = 0;
            for(var i=0; i<givenArr.length; i++){
            newArr.push([]);
            for(var j=0; j<size; j++){
            newArr[i] = [];
            total += givenArr[i][j];
        }
            count ++;
            if(count === size){
            average = total / (size*size);
            for(var row=i-size+1; row<size; row++){
            for(var col=j-size; col<size; col++){
            newArr[row][col] = average;
        }
            console.log(newArr);
        }
        }
            j+=size;
        }

            console.log(newArr);

            console.log(newArr);
            return newArr;
        }



        </script>
</head>
<body>

</body>
</html>