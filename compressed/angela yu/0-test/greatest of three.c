#include <stdio.h>
int main(void)
{
    int a, b, c;
    printf("Enter the Values of a and b:\n");
    scanf("%d\n%d\n%d", &a, &b, &c);

    if (a > b)
    {
        if  (a > c)
        {
            printf("%d is the greatest of the three numbers\n", a);
        }    
    }
    if ((b > a) &&(b > c))
    {
        printf("%d is the greatest of the three numbers\n", b);
    }
    if ((c > b) &&(c > a))
    {
        printf("%d is the greatest of the three numbers\n", c);
    }
    return (0);
}