"use client";
import { useState } from "react";

const symptoms = [
  "观影后感到恶心或眩晕",
  "出现‘我/世界是假的’的念头",
  "观影后语言组织困难，仅能发出感叹或沉默",
  "对手机、电脑等电子设备产生不适或警惕",
  "强烈冲动去刷短视频、吃甜食等冲淡不适",
  "情绪冷漠或与现实情境情绪不匹配",
  "感觉时间变得混乱，无法判断电影时长",
  "工作/学习效率下降",
  "对人复述剧情、无法抽离",
  "试图验证现实是否真实，或感到轻度焦虑"
];

export default function BMIDSQuestionnaire() {
  const [selected, setSelected] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (index: number) => {
    const newSet = new Set(selected);
    newSet.has(index) ? newSet.delete(index) : newSet.add(index);
    setSelected(newSet);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getResult = () => {
    const score = selected.size;
    if (score >= 8) return "重度 BMIDS：建议远离一切关于未来的艺术作品。";
    if (score >= 5) return "中度 BMIDS：建议饮水、散步，并与人类进行面对面交流。";
    if (score >= 2) return "轻度 BMIDS：可以自我恢复，但请勿连续观看类似作品。";
    return "未见明显 BMIDS 症状：你可能是黑镜免疫体质，或已失去人类感知力。";
  };

  return (
    <main className="max-w-xl mx-auto mt-10 p-4 font-sans">
      <h2 className="text-2xl font-bold mb-4">黑镜观后创伤自评问卷</h2>
      {!submitted ? (
        <div className="space-y-3">
          {symptoms.map((symptom, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selected.has(index)}
                onChange={() => toggle(index)}
                id={`symptom-${index}`}
              />
              <label htmlFor={`symptom-${index}`}>{symptom}</label>
            </div>
          ))}
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded"
            onClick={handleSubmit}
          >
            提交评分
          </button>
        </div>
      ) : (
        <div className="text-lg font-medium">评分结果：{getResult()}</div>
      )}
    </main>
  );
}
