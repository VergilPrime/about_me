git add .
echo -n "Enter commit description"
read message
git commit -m "$message"
git push origin master
