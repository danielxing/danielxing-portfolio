#!/bin/bash
# Daniel Xing Portfolio 部署脚本 - 宝塔服务器
# 服务器: 43.142.155.57
# 目标路径: 待配置新域名

set -e  # 遇到错误立即退出

echo "======================================"
echo "  Daniel Xing Portfolio - 部署脚本"
echo "======================================"

# 项目目录
PROJECT_DIR="/Users/xingdaniel/Upwork Projects/Freelance/danielxing-portfolio"
cd "$PROJECT_DIR"

# 1. 构建项目
echo ""
echo "[1/4] 构建项目..."
npm run build

if [ ! -d "dist" ]; then
    echo "错误: 构建失败，dist 目录不存在"
    exit 1
fi

echo "构建成功!"

# 2. 创建远程目录（如果不存在）
# 注意: 请在部署前修改 DEPLOY_PATH 为实际的部署路径
DEPLOY_PATH="/www/wwwroot/danielxing.com"  # 修改为你的域名对应路径

echo ""
echo "[2/4] 确保远程目录存在..."
ssh root@43.142.155.57 "mkdir -p $DEPLOY_PATH"

# 3. 上传构建产物
echo ""
echo "[3/4] 上传文件到服务器..."
scp -r dist/* root@43.142.155.57:$DEPLOY_PATH/

# 4. 验证部署
echo ""
echo "[4/4] 验证部署..."
ssh root@43.142.155.57 "ls -la $DEPLOY_PATH/"

echo ""
echo "======================================"
echo "  部署完成!"
echo "  请确保域名已正确配置"
echo "======================================"
