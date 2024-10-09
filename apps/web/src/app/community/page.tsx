'use client';
import React, { Suspense, useState } from 'react';
import { Filter } from '../../components/community/Filter';
import { PostDetail } from '../../components/community/PostDetail';
import { PostType } from '../../utils/types/Post';
import { PostItem } from '../../components/community/PostItem';

type FilterType = '최신순' | '좋아요순' | '팔로우';

const dummyPost: PostType[] = [
  {
    title: '유데미 개발 챌린지 같이 해 볼 사람?',
    content: `
    클론코딩 나가보려고 하는데 같이 해요. 다른 학교 상관없음
  🙌 유데미 개발 챌린지로 클론코딩 완성할 사람 찾습니다 
  (프론트엔드 / 백엔드 / 게임개발)
  
  유데미 개발 챌린지에서 무엇을 하나요? 
  🎯 현업 개발자 라이브 특강 2회
  😀 챌린지 참여자에게 코드 리뷰 기회
  💪4주 동안 주차별 미션
  🙌멘토와의 1:1 커피챗
  
  개발 카테고리는 ▲프론트엔드 ▲백엔드 ▲게임 개발 총 3개로 나뉘어 수강생들이 니즈에 맞는 강의를 들을 수 있다. 각 영역은 임동준 우아한형제들 개발자, 박재호 레인보우브레인 CTO(최고기술책임자), 이도행 라인게임즈 소프트웨어 엔지니어 등 우수한 멘토가 직접 성장을 지원한다.
  
  또한 커리큘럼이 진행되는 동안 현직 개발자가 진행하는 라이브 특강을 2회 실시하고, 미션 수행 우수자로 선정된 수강생에게는 멘토와의 1:1 커피챗 기회를 함께 제공한다.  ‘유데미 개발 챌린지: 클론코딩편’은 오는 9월 22일까지 유데미 큐레이션 공식 홈페이지를 통해 지원할 수 있다. 개발자 취업을 꿈꾸는 누구나 신청할 수 있으며, 커리큘럼은 9월 23일부터 10월 18일까지 약 한 달간 진행된다.
  
  출처 : 비즈서울`,
    date: '2024-09-16',
    writer: 'gimsua672',
    hashtags: ['#대회', '#유데미아카데미챌린지', '#클론코딩', '#같이할사람'],
    commentCount: 13,
    likeCount: 68,
  },
];

export default function Community() {
  const [selected, setSelected] = useState<FilterType>('최신순');
  const [postId, setPostId] = useState<string | null>(null);

  return (
    <>
      {postId && (
        <PostDetail posts={dummyPost} postId={postId} setPostId={setPostId} />
      )}
      <div className="bg-background h-[calc(100vh_-_80px)] flex flex-col gap-[20px] pt-[142px] items-center">
        <Filter selected={selected} setSelected={setSelected} />
        {dummyPost.map((post, index) => (
          <PostItem post={post} index={index} setPostId={setPostId} />
        ))}
      </div>
    </>
  );
}
