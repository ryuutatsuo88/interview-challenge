import React from "react";
import "src/styles/courseLayout.scss";


/** Example shape of your lesson data */
interface LessonData {
    version: number;
    "level-topic-lesson-version": string;
    image: string;
    level: string;
    course: string;
    topic: string;
    lessonType: string[];
    public: boolean;
    "language-public": Record<string, boolean>;
    description: Record<string, string>;
    lesson: number;
    title: string;
  }
  
  /** Hard‐code the topic order for Japanese */
  const TOPIC_ORDER = ["Hiragana", "Katakana", "Main"];
  
  /** A node on our roadmap (index used for the zigzag positioning). */
  interface RenderNode {
    id: string;
    label: string;
    index: number;
    type: "topic" | "lesson";
  }
  
  /** A simple connection (from→to node IDs). */
  interface Connection {
    from: string;
    to: string;
  }
  
  const getZigzagPosition = (i: number) => {
    // Same pattern as before
    const leftPattern = [200, 280, 200, 120, 200, 280, 200];
    const segments: Array<{ anglePattern: Array<{x: number, y: number}>}> = [
        { anglePattern: [{x: 150, y: -20}, {x: 100, y: 30}] },
        { anglePattern: [{x: -130, y: 20}] },
        { anglePattern: [{x: 0, y: 0}] },
        { anglePattern: [{x: 0, y: 0}] },
        { anglePattern: [{x: 0, y: 0}] },
        { anglePattern: [{x: 0, y: 0}] },
        { anglePattern: [{x: 0, y: 0}] },
    ];

    const patternLength = leftPattern.length;
  
    const left = leftPattern[i % patternLength];
    const seg = segments[i % segments.length];
    const top = 40 + i * 100;
    return { x: left, y: top, s: seg };
  };
  

const buildIsometricPathWithInstructions = (
    sx: number,
    sy: number,
    ex: number,
    ey: number,
    instructions: { anglePattern: Array<{x: number, y: number}> }
  ): string => {
    // 1) Start at bottom-center of start node
    let curX = sx + 50;
    let curY = sy + 60;
  
    // 2) We'll end at top-center of end node
    const endX = ex + 50;
    const endY = ey;
  
    // The path string, starting with "M x,y"
    let path = `M ${curX},${curY}`;
  
    const { anglePattern } = instructions;

    // We'll cycle through pattern for "numberOfSegments" times:
    for (const pat of anglePattern) {
        const nx = curX + pat.x;
        const ny = curY + pat.y;
        path += ` L ${nx},${ny}`;
        curX = nx;
        curY = ny;
    }
  
    // 4) After all instructions, do a final line directly to the end node
    //    so we always land exactly at top-center of node #2.
    path += ` L ${endX},${endY}`;
  
    return path;
  };
  
  /** Main props: pass an array of LessonData from your API. */
  interface CourseLayoutProps {
    lessons: LessonData[];
  }
  
  const CourseLayout: React.FC<CourseLayoutProps> = ({ lessons }) => {
    const nodes: RenderNode[] = [];
    const connections: Connection[] = [];
  
    let previousId: string | null = null;
  
    // Build an ordered list of nodes (topic -> its lessons -> next topic -> ...).
    TOPIC_ORDER.forEach((topic) => {
      const topicLessons = lessons
        .filter((lsn) => lsn.topic === topic)
        .sort((a, b) => a.lesson - b.lesson);
  
      if (topicLessons.length > 0) {
        // Create a topic node
        const topicId = `topic-${topic}`;
        const topicIndex = nodes.length;  // next sequential index
        nodes.push({
          id: topicId,
          label: topic,
          index: topicIndex,
          type: "topic",
        });
  
        // Connect from the previous node if we have one
        if (previousId !== null) {
          connections.push({
            from: previousId,
            to: topicId,
          });
        }
  
        // This topic is now the last node
        previousId = topicId;
  
        // Now its lessons
        topicLessons.forEach((lsn) => {
          const lessonId = `lesson-${topic}-${lsn.lesson}`;
          const lessonIndex = nodes.length; // next index
          nodes.push({
            id: lessonId,
            label: lsn.title,
            index: lessonIndex,
            type: "lesson",
          });
  
          // Connect topic->lesson (or lesson->lesson) in sequence
          if (previousId !== null) {
            connections.push({
              from: previousId,
              to: lessonId,
            });
          }
          previousId = lessonId;
        });
      }
    });
  
    return (
    <div className="course-layout-container">
        <svg className="course-layout-svg">
          {connections.map((conn, i) => {
            const start = nodes.find((n) => n.id === conn.from);
            const end = nodes.find((n) => n.id === conn.to);
            if (!start || !end) {
                return null;
            }
    
            const { x: sx, y: sy, s: s1 } = getZigzagPosition(start.index);
            const { x: ex, y: ey, s: s2 } = getZigzagPosition(end.index);
    
            const pathD = buildIsometricPathWithInstructions(sx, sy, ex, ey, s1);
    
            return (
              <path
                key={i}
                d={pathD}
                fill="none"
                stroke="#FF0000"   // for debugging, set red
                strokeWidth={3}
              />
            );
          })}
        </svg>
    
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`roadmap-node node-${node.type} node-index-${node.index}`}
          >
            <div className="node-content">{node.label}</div>
          </div>
        ))}
      </div>
    );
  };

const CourseRender = () => {
    return <CourseLayout 
        lessons={[{
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#1#Version#1",
            "image": "Japanese_Intro_Katakana_1.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Katakana",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana a, e, u, e, o & ka",
            },
            "lesson": 1,
            "title": "Katakana #1"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Katakana",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 2,
            "title": "Katakana #2"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Hiragana",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 1,
            "title": "Hiragana #1"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Main",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 1,
            "title": "Main #1"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Hiragana",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 2,
            "title": "Hiragana #2"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Main",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 2,
            "title": "Main #2"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Hiragana",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 3,
            "title": "Hiragana #3"
        },
        {
            "version": 1,
            "level-topic-lesson-version": "Level#Intro#Topic#Katakana#Lesson#2#Version#1",
            "image": "Japanese_Intro_Katakana_2.png",
            "level": "Intro",
            "course": "Japanese",
            "topic": "Main",
            "lessonType": [
                "Writing"
            ],
            "public": true,
            "language-public": {
                "fi-FI": false,
            },
            "description": {
                "de-DE": "Katakana sa & ta",
            },
            "lesson": 3,
            "title": "Main #3"
        }
    ]}
    />;
};

export default CourseLayout;
export { CourseRender };