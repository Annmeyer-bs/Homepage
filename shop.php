<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/shop.css" rel="stylesheet">
	<title>Document</title>
</head>
<body>	
<div class="container">
<div class="container__form">
	<?php	require	"block/sh_header.php";	?>
	<div class="container__form">
	<?php	require	"block/sh_filter.php";	?>	
	<?php	require	"block/sh_catalog.php";	?>	
		
	</div>
	<?php	require	"block/sh_footer.php";	?>
</div>
</div>
	<script src="https://kit.fontawesome.com/e552c67050.js" crossorigin="anonymous"></script>
	<script type="text/javascript" src="//code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="js/slick.min.js"></script>
	<script	src="js/script.js"></script>
</body>
</html>
