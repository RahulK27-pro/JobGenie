import { Button } from '@/components/ui/button';
import { Briefcase, CalendarClock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const InterviewItemCard = ({ interview }) => {
    const router = useRouter();

    return (
        <div className="border shadow-md rounded-2xl p-5 bg-white dark:bg-[#101929] hover:shadow-xl transition-all duration-300 space-y-4 w-full">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-semibold text-lg">
                <Briefcase className="h-5 w-5" />
                {interview?.jobPosition}
            </div>

            <div className="text-md text-gray-700 dark:text-gray-200">
                Experience: <span className="font-medium">{interview?.jobExperience} years</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CalendarClock className="h-4 w-4" />
                Created At: {interview?.createdAt}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 w-full">
                <Button
                    onClick={() => router.push(`/interviews/interview/${interview?.mockId}/feedback`)}
                    size="sm"
                    variant="outline"
                    className="w-full cursor-pointer border-blue-500 text-black dark:text-white dark:border-blue-400 transition"
                >
                    View Feedback
                </Button>
                <Button
                    onClick={() => router.push(`/interviews/interview/${interview?.mockId}`)}
                    size="sm"
                    className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold transition"
                >
                    Start Interview
                </Button>
            </div>
        </div>
    );
};

export default InterviewItemCard;
