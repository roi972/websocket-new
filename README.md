docker run -d --name nginx-base -p 80:80 nginx:latest

docker cp default.conf nginx-base:/etc/nginx/conf.d/

docker exec nginx-base nginx -t
docker exec nginx-base nginx -s reload

