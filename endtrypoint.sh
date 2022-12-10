#!/bin/bash

cd /usr/src/app/dist/;
npx prisma migrate deploy;