run-apps:
	# Run multiple targets concurrently; Source: https://tech.serhatteker.com/post/2021-02/run-multiple-make-targets-concurrently/
	make -j 2 start-api start-web-app

start-api:
	cd api && rails s

start-web-app:
	cd web-app && npm start