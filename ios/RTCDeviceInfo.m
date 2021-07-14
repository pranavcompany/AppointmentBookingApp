//
//  RTCDeviceInfo.m
//  DemoForButton
//
//  Created by Apple on 10/07/21.
//

#import "RTCDeviceInfo.h"
#import <React/RCTLog.h>
#import <sys/utsname.h>

@implementation RTCDeviceInfo

// To export a module named RCTCheckEmulator
RCT_EXPORT_MODULE(DeviceDetails);

- (BOOL) isEmulator {
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString* deviceId = [NSString stringWithCString:systemInfo.machine
                                            encoding:NSUTF8StringEncoding];

    if ([deviceId isEqualToString:@"i386"] || [deviceId isEqualToString:@"x86_64"] ) {
        return YES;
    } else {
        return NO;
    }
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(isEmulatorSync) {
    return @(self.isEmulator);
}

RCT_EXPORT_METHOD(isEmulator:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(self.isEmulator));
}

@end
