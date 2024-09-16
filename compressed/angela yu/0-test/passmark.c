#include <stdio.h>
int main(void)
{
    int mark;
    printf("Enter the exam score:\n");
    scanf("%d", &mark);

    if (mark > 39)
    {
        printf("Congratulations you can proceed to the next semester\n");
    }
    if (mark < 40)
    {
        printf("Sorry you have carried over the course\n");
    }
    return(0);
}