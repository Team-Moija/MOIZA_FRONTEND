'use client';
import React, { useState } from 'react';
import { Icon } from '@repo/ui/src';

type PostType = 'post' | 'survey';

const EditedArray = [
  Icon.Bold,
  Icon.Italic,
  Icon.LineThrough,
  Icon.Highlight,
  Icon.Quotes,
  Icon.Link,
  Icon.Code,
];

export default function CommunityWrite() {
  const [postType, setPostType] = useState<PostType>('post');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostType(event.target.value as PostType);
  };

  return (
    <div className="bg-background min-h-[100vh] h-fit flex flex-col gap-[20px] pt-[142px] items-center">
      <div className="w-[936px] flex flex-col gap-[12px]">
        <div className="flex gap-[20px] w-[100%] px-[8px]">
          <label className="flex gap-[8px] items-center text-btn3">
            <input
              type="radio"
              value="post"
              checked={postType === 'post'}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-[16px] h-[16px] rounded-[50%] border-[1px] ${postType === 'post' ? 'border-primary-400' : 'border-subText2'} bg-background flex justify-center items-center`}>
              <div
                className={`w-[8px] h-[8px] rounded-[50%] bg-primary-400 ${postType === 'post' ? 'block' : 'hidden'}`}></div>
            </div>
            게시물
          </label>
          <label className="flex gap-[8px] items-center text-btn3">
            <input
              type="radio"
              value="survey"
              checked={postType === 'survey'}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-[16px] h-[16px] rounded-[50%] border-[1px] ${postType === 'survey' ? 'border-primary-400' : 'border-subText2'} bg-background flex justify-center items-center`}>
              <div
                className={`w-[8px] h-[8px] rounded-[50%] bg-primary-400 ${postType === 'survey' ? 'block' : 'hidden'}`}></div>
            </div>
            설문
          </label>
        </div>
        <input
          type="text"
          className="w-[100%] h-[52px] px-[20px] rounded-[4px] outline-none border-accent border-[1px] text-text placeholder-subText2 text-p1"
          placeholder="제목을 입력해주세요"
        />
        <div className="flex gap-[8px] w-[100%]">
          <input
            className="px-[12px] w-[94px] h-[30px] flex justify-center items-center bg-[rgba(18,18,18,0.04)] placeholder-subText1 text-btn2 rounded-[4px] outline-none"
            placeholder="#태그 입력"
          />
        </div>
        <div className="w-[100%] mt-[2px] border-[1px] border-accent min-h-[272px] h-fit rounded-[4px] bg-white relative">
          <div className="w-[100%] h-[40px] border-b-[1px] border-accent flex items-center gap-[8px] px-[12px]">
            {EditedArray.map((icon, index) => {
              return (
                <React.Fragment key={index}>
                  {icon()}
                  {index !== EditedArray.length && (
                    <div className="border-[1px] border-accent h-[24px] w-[0]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <textarea
            placeholder="내용을 입력해주세요"
            className="outline-none w-[100%] min-h-[232px] resize-none p-[20px] placeholder-subText2 text-text text-p1"></textarea>
          <div className="absolute right-[20px] bottom-[24px] flex gap-[8px] justify-center text-subText1 border-[1px] border-accent rounded-[8px] px-[12px] py-[10px] cursor-pointer">
            <Icon.AddImage />
            파일 추가
          </div>
        </div>
        {postType === 'survey' && (
          <div className="p-[32px] w-[100%] border-[1px] border-accent bg-white flex flex-col gap-[24px]">
            <input
              type="text"
              className="w-[100%] h-[52px] px-[20px] rounded-[4px] outline-none border-accent border-[1px] text-text placeholder-subText2 text-p1"
              placeholder="제목을 입력해주세요"
            />
            <div className="flex flex-col gap-[12px]">
              <div className="relative">
                <input
                  type="text"
                  className="w-[100%] h-[52px] px-[20px] rounded-[4px] outline-none border-accent border-[1px] text-text placeholder-subText2 text-p1"
                  placeholder="예"
                />
                <div className="absolute bottom-[20px] right-[20px]">
                  <Icon.CrossLine />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="w-[100%] h-[52px] px-[20px] rounded-[4px] outline-none border-accent border-[1px] text-text placeholder-subText2 text-p1"
                  placeholder="이니요"
                />
                <div className="absolute bottom-[20px] right-[20px]">
                  <Icon.CrossLine />
                </div>
              </div>
              <div className="w-[100%] h-[52px] px-[20px] rounded-[4px] outline-none border-accent border-[1px] border-dashed text-p1 text-subText2 flex items-center">
                다른 항목 추가
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
