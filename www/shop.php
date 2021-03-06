<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	<link href="css/shop.css" rel="stylesheet">
	
	<title>Document</title>
</head>
<body>	
	<?php	require	"block/sh_header.php";	?>
		<div class="container">
			<div class="form">
				<?php	require	"block/sh_filter.php";	?>	
				<?php	require	"block/sh_catalog.php";	?>	
			</div>
		</div>
	<?php	require	"block/sh_footer.php";	?>

	<script src="https://kit.fontawesome.com/e552c67050.js" crossorigin="anonymous"></script>
	<script type="text/javascript" src="//code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="js/slick.min.js"></script>
	<script	src="js/script.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
</body>
</html>
