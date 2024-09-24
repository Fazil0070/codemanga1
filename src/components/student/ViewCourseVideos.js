import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Play, List } from 'lucide-react';

const ViewCourseVideos = () => {
  const { courseId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Dummy video data based on course ID
  const videos = {
    1: [
      { id: 1, title: 'Introduction to Python', videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
      { id: 2, title: 'Python Data Structures', videoUrl: 'https://www.youtube.com/watch?v=R-HLU9Fl5ug' },
    ],
    2: [
      { id: 3, title: 'Algorithms Basics', videoUrl: 'https://www.youtube.com/watch?v=0IAPZzGSbME' },
      { id: 4, title: 'Sorting Algorithms', videoUrl: 'https://www.youtube.com/watch?v=kPRA0W1kECg' },
    ],
    3: [
      { id: 3, title: 'Web Development Basics', description: 'Introduction to web development concepts.', videoUrl: 'https://www.youtube.com/watch?v=Q33KBiDriJY' },
     
    ],
    4: [
      { id: 4, title: 'Aptitude for Competitive Exams', description: 'Enhance your aptitude skills for exams.', videoUrl: 'https://youtu.be/Ahc7PhLObJI?si=maelZp0VXsJgPbsj' },
     
    ],
  };

  const courseVideos = videos[courseId] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-800 text-center">
          Course Videos
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
              {selectedVideo ? (
                <div>
                  <ReactPlayer
                    url={selectedVideo.videoUrl}
                    width="100%"
                    height="400px"
                    controls
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{selectedVideo.title}</h2>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[400px] bg-gray-100">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                    <p className="text-xl text-gray-600">Select a video to play</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
                <List className="w-6 h-6 mr-2" />
                Video List
              </h2>
              <ul className="space-y-3">
                {courseVideos.map(video => (
                  <li key={video.id}>
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg shadow-md hover:bg-indigo-50 transition-colors duration-200 flex items-center"
                    >
                      <Play className="w-5 h-5 mr-3 text-indigo-600" />
                      <span className="text-gray-800 font-medium">{video.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourseVideos;