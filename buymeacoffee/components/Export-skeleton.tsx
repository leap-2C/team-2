"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const ExploreSkeleton = () => {
  return (
    <div className="space-y-6 px-4 md:px-12 py-6">
      {/* Title Skeleton */}
      <Skeleton className="h-8 w-48 rounded-md" />
      
      {/* Search Input Skeleton */}
      <Skeleton className="h-10 w-full max-w-sm rounded-md" />
      
      {/* Creators List Skeleton */}
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4">
            <div className="flex items-start gap-4 w-full md:w-auto">
              {/* Avatar Skeleton */}
              <Skeleton className="w-12 h-12 rounded-full" />
              
              <div className="flex-1 space-y-2">
                {/* Name Skeleton */}
                <Skeleton className="h-5 w-32 rounded-md" />
                
                {/* About Title Skeleton */}
                <Skeleton className="h-4 w-24 rounded-md" />
                
                {/* Description Skeleton */}
                <Skeleton className="h-4 w-full max-w-md rounded-md" />
                <Skeleton className="h-4 w-3/4 max-w-md rounded-md" />
              </div>
            </div>
            
            {/* Right Column Skeleton */}
            <div className="mt-4 md:mt-0 w-full md:w-auto flex flex-col items-start md:items-end space-y-2">
              {/* Social URL Label Skeleton */}
              <Skeleton className="h-4 w-28 rounded-md" />
              
              {/* URL Skeleton */}
              <Skeleton className="h-4 w-40 rounded-md" />
              
              {/* Button Skeleton */}
              <Skeleton className="h-9 w-28 rounded-md mt-2" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExploreSkeleton;