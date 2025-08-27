@echo off
set GIT_PAGER=cat
git add .
git commit -m "feat: Add consent checkbox integration and fix deployment issues"
git push origin backup-main
pause
