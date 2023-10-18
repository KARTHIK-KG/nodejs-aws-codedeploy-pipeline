#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/test-portal/deploy.log

echo 'cd /home/ec2-user/test-portal' >> /home/ec2-user/test-portal/deploy.log
cd /home/ec2-user/test-portal >> /home/ec2-user/test-portal/deploy.log

echo 'npm install' >> /home/ec2-user/test-portal/deploy.log 
npm install >> /home/ec2-user/test-portal/deploy.log
