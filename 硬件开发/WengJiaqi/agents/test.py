#修改导入
from openai import OpenAI 
#TODO:之后用AI自动生成更多Agent功能
#示例演示
def test_openai_client():
    client =OpenAI(api_key="YOUR_API_KEY")
    print("OpenAI client 初始化成功")